import Link from "next/link";
import { StyledTable, StyledTableCell, ButtonSubmit } from "./styles";

import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { updateBikePosition } from "@/apis/adminApis";
import StatusIndicatorDiv from "@/components/Status";
import { ButtonDelete } from "@/components/BookingWizard/BikeInsuranceTable/styles";

type Bike = {
  id: number;
  model: string;
  is_deleted: number;
  softDelete?: Function;
  position?: number;
  name: string;
};

interface BikeTableProps {
  bikes: Bike[];
  softDelete?: Function;
  hardDelete: Function;
}

const BikeTable: React.FC<BikeTableProps> = ({ bikes, softDelete, hardDelete }) => {

  const [AllBikes, setAllBikes] = useState<Bike[]>();
  useEffect(() => {
    if (bikes) {
      setAllBikes(bikes.sort((a, b) => (a.position ?? 0) - (b.position ?? 0)));
    }
  }, [bikes])

  const handlePositionChange = (position: number, id: number, index: number) => {
    if (AllBikes) {
      AllBikes[index].position = position;
      setAllBikes([...AllBikes.sort((a, b) => (a.position ?? 0) - (b.position ?? 0))]);

    }

  }

  const savePositions = () => {
    updateBikePosition(AllBikes ? AllBikes.map((element) => {
      return {
        bikeId: element.id,
        position: element.position ?? 0
      }
    }) : [])
  }

  const onDelete = (bikeId: Number, index: Number) => {
    hardDelete(bikeId, index);
  }


  return (
    <div>
      <ButtonSubmit href="/admin/createBike">Add New Product</ButtonSubmit>
      <ButtonSubmit href="#" onClick={() => savePositions()}>Save</ButtonSubmit>
      <StyledTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Edit</th>
            <th>Insurance</th>
            <th>Photos</th>
            <th>Pricing & Discounts</th>
            <th>SEO</th>
            <th>Active</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {AllBikes?.map((bike, index) => (
            <tr key={bike.id}>
              <StyledTableCell><StatusIndicatorDiv status={bike.is_deleted == 0} /></StyledTableCell>
              <StyledTableCell>{bike.id}</StyledTableCell>
              <StyledTableCell>{bike.name}</StyledTableCell>
              <StyledTableCell width={'10%'}>
                <TextField
                  className="text-input"
                  label=""
                  variant="outlined"
                  type="number"
                  value={bike.position}
                  onChange={(e) => handlePositionChange(Number(e.target.value), bike.id, index)}
                />
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/editBike?id=${bike.id}`}>Edit</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/bike?id=${bike.id}`}>View Insurance</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/editBikeGallery?id=${bike.id}`}>View Photos</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/editBikeDiscounts?id=${bike.id}`}>Pricing & Discounts</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Link href={`/admin/setSEO?id=${bike.id}`}>Edit SEO</Link>
              </StyledTableCell>
              <StyledTableCell>
                <Button type="button" onClick={() => softDelete ? softDelete(bike.id, index, 1) : null} style={{
                  backgroundColor: '#2ECC71',
                  color: 'white',
                  marginInline: '2px'
                }}>
                  Yes
                </Button>
                <Button type="button" onClick={() => softDelete ? softDelete(bike.id, index, 0) : null} style={{
                  backgroundColor: '#E74C3C',
                  color: 'white',
                  marginInline: '2px'
                }}>
                  No
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <ButtonDelete onClick={() => onDelete(bike.id, index)}>
                  Delete
                </ButtonDelete>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default BikeTable;
