import React from 'react'
import { DivBikeInsuranceTableContainer,H3Title,DivInsuranceListWrapper } from './styles'
import CouponsTable from './CouponTable/CouponTable'
import { Coupon } from '@/types/admin/admin'
interface CouponsPageProps {
  coupons: Coupon[];
  softDelete?: Function;
  hardDelete?: Function;
}

const CouponTable :React.FC<CouponsPageProps> = ({coupons,
  softDelete = () => {},
  hardDelete = () => {},}) => {
  return (
    <div><DivBikeInsuranceTableContainer>
      <H3Title>Coupons</H3Title>
      <DivInsuranceListWrapper>
        <CouponsTable
          softDelete={softDelete}
          coupons={coupons}
          hardDelete={hardDelete}
        />
      </DivInsuranceListWrapper>
    </DivBikeInsuranceTableContainer></div>
  )
}

export default CouponTable