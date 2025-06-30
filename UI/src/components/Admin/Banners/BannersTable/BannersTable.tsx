import Link from "next/link";
import { ButtonSubmit, StyledTable, StyledTableCell } from "./styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import StatusIndicatorDiv from "@/components/Status";
import { Banner } from "@/types/admin/admin";

interface BannersTableProps {
  banners: Banner[];
  softDelete?: Function;
  hardDelete?: Function;
}

const BannersTable: React.FC<BannersTableProps> = ({
  banners,
  softDelete = () => {},
  hardDelete = () => {},
}) => {
  const [AllBanners, setAllBanners] = useState<Banner[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [bannersPerPage] = useState<number>(10);

  useEffect(() => {
    if (banners) {
      setAllBanners(banners);
    }
  }, [banners]);

  const indexOfLastBanner = currentPage * bannersPerPage;
  const indexOfFirstBanner = indexOfLastBanner - bannersPerPage;
  const currentBanners = AllBanners.slice(
    indexOfFirstBanner,
    indexOfLastBanner
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(AllBanners.length / bannersPerPage);

  return (
    <div>
      <ButtonSubmit href="/admin/createBanner">Add New Banner</ButtonSubmit>
      <StyledTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Title</th>
            <th>Alt Text</th>
            <th>Change Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentBanners.map((banner) => (
            <tr key={banner.id}>
              <StyledTableCell>
                <StatusIndicatorDiv status={banner.isEnabled} />
              </StyledTableCell>
              <StyledTableCell>{banner.id}</StyledTableCell>
              <StyledTableCell>{banner.title}</StyledTableCell>
              <StyledTableCell>{banner.altText}</StyledTableCell>

              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => softDelete?.(banner.id, 1)}
                  style={{
                    backgroundColor: "#2ECC71",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  Enable
                </Button>
                <Button
                  type="button"
                  onClick={() => softDelete?.(banner.id, 0)}
                  style={{
                    backgroundColor: "#E74C3C",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  Disable
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/editBanners?id=${banner.id}`}>Edit</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => hardDelete?.(banner.id, 0)}
                  style={{
                    backgroundColor: "#E74C3C",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Pagination controls */}
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outlined"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BannersTable;
