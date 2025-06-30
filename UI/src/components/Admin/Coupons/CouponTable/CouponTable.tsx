import Link from "next/link";
import { ButtonSubmit, StyledTable, StyledTableCell } from "./styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import StatusIndicatorDiv from "@/components/Status";
import { Coupon } from "@/types/admin/admin";
import { getAllCouponsApi } from "@/apis/couponsApis";
interface CouponsTableProps {
  coupons: Coupon[];
  softDelete?:Function;
  hardDelete?: Function;
}


const CouponsTable: React.FC<CouponsTableProps> = ({
  coupons,
 softDelete = () => {},
  hardDelete = () => {},
}) => {
  const [AllCoupons, setAllCoupons] = useState<Coupon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [couponsPerPage] = useState<number>(10);

  useEffect(() => {
     
    if (coupons) {
      setAllCoupons(coupons);
    }
  }, [ coupons,AllCoupons ]);

  const indexOfLastCoupon = currentPage * couponsPerPage;
  const indexOfFirstCoupon = indexOfLastCoupon - couponsPerPage;
  const currentCoupons = AllCoupons.slice(
    indexOfFirstCoupon,
    indexOfLastCoupon
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(AllCoupons.length / couponsPerPage);

  return (
    <div><br />
      <ButtonSubmit href="/admin/createCoupon">Add New Coupon</ButtonSubmit><br />
      <StyledTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Code</th>
            <th>Percentage</th>           
            <th>Change Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentCoupons.map((coupon) => (
            <tr key={coupon.id}>
              <StyledTableCell>
                <StatusIndicatorDiv status={coupon.activated} />
              </StyledTableCell>
              <StyledTableCell>{coupon.id}</StyledTableCell>
              <StyledTableCell>{coupon.code}</StyledTableCell>
              <StyledTableCell>{coupon.percentage}%</StyledTableCell>
              

              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => softDelete?.(coupon.id, 1)}
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
                  onClick={() => softDelete?.(coupon.id, 0)}
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
                <Link href={`/admin/editCoupons?id=${coupon.id}`}>Edit</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => hardDelete?.(coupon.id, 0)}
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

export default CouponsTable;
