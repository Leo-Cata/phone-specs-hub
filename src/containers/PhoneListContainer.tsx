import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getBrandBySlug } from '../services/phoneApi'
import { BrandsPhoneList, Phones } from '../types/types'
import { AxiosResponse } from 'axios'
import { Stack } from '@mui/material'
import PhoneCards from '../components/PhoneCards'
import PageNumbersButtons from '../components/PageNumbersButton'

const PhoneListContainer = () => {
  //get the brand slug when the user clicks on the brand list
  const { brandSlug } = useParams()
  console.log(brandSlug)

  //set the array of phones
  const [brandsPhones, setBrandsPhones] = useState<Phones[]>()

  const [page, setPage] = useState(1)

  const [numberOfPages, setNumberOfPages] = useState(1)

  //fetch the list of phones for said brand
  useEffect(() => {
    const fetchBrandsPhones = async () => {
      try {
        if (brandSlug) {
          const response: AxiosResponse<BrandsPhoneList> = await getBrandBySlug(
            brandSlug,
            page,
          )
          setNumberOfPages(response.data.data.last_page)
          const brandsPhones: Phones[] = response.data.data.phones
          setBrandsPhones(brandsPhones)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchBrandsPhones()
  }, [brandSlug, page])

  const handlePage = (page: number) => {
    setPage(page)
  }

  return (
    <Stack className=" m-4 sm:mx-40 sm:my-10" alignItems={'center'} spacing={2}>
      {brandsPhones && <PhoneCards brandsPhones={brandsPhones} />}
      <PageNumbersButtons
        handlePage={handlePage}
        numberOfPages={numberOfPages}
        page={page}
      />
    </Stack>
  )
}

export default PhoneListContainer