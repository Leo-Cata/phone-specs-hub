import { Variant } from '@mui/material/styles/createTypography'
import { ReactNode } from 'react'

export interface PhoneBrands {
  brand_id: number
  brand_name: string
  brand_slug: string
  detail: string
  device_count: number
}

export interface BrandsPhoneList {
  status: boolean
  data: {
    title: string
    current_page: number
    last_page: number
    phones: Phones[]
  }
}
export interface Phones {
  brand: string
  phone_name: string
  slug: string
  image: string
  detail: string
}

export interface ButtonInputAndPages {
  handlePage: (page: number) => void 
  numberOfPages: number
  currentPage: number
}

export interface PhoneSpecifications {
  brand: string
  phone_name: string
  thumbnail: string
  phone_images: string[]
  release_date: string
  dimension: string
  os: number
  storage: string
  specifications: PhoneSpecificationItem[]
}

interface PhoneSpecificationItem {
  title: string
  specs: PhoneSpecification[]
}

interface PhoneSpecification {
  key: string
  val: string[]
}

export interface PhoneSpecsProps {
  specifications: PhoneSpecificationItem[]
}

export interface BasicInfoProps {
  // os is giving error when type is set to string so it is set to any in types.ts
  os: any
  storage: string
  dimension: string
  release: string
}

//react children prop
export type ChildrenProp = {
  children: ReactNode
}
//card media component types
export type CardMediaProps = {
  image: string
  alt: string
}

//latest phones fetch data type
export interface LatestPhones {
  phone_name: string
  slug: string
  image: string
  detail: string
}

//latest phones cards props
export interface LatestPhonesCardsProps {
  latestPhones: LatestPhones[]
}

//top by interest fetch data type
export interface BaseRatings {
  phone_name: string
  slug: string
  detail: string
}

export type ByInterestType = BaseRatings & {
  hits: number
}

export type ByFansType = BaseRatings & {
  favorites: number
}

export interface ByInterestCardsProps {
  byInterestPhones: ByInterestType[]
}

//custom card type
export interface CustomCardProps {
  customKey: string
  linkTo: string
  image: string
  alt: string
  title: string
  text: string | number | null
}

//type for the by fans and by interest container
export interface RatingsProps {
  firstText: string
  SecondText: number
  slug: string
  customKey: string
}

export interface PhoneImagesSliderProps {
  phoneImages: string[];
  phoneName: string;
}

//interface for passing useLocation().pathname from desktop menu to mobile
export interface LocationPathnameProp {
  locationPathname: string
}

//interface for the props passed to customTypography
export interface CustomTypographyProps {
  displayedText: string
  textVariant: Variant
}

//interface for the brands and images
export interface BrandsImages{
    [brandName: string]: string;
}

//boolean for mobile searchbar, if the type is () void it will not work, throw error 'handleClose is not a function' on the file used
export interface MobileSearchBar{
  isForMobile: boolean
  handleClose?: VoidFunction
}

//type for the items inside the array of the fetched search results also used when mapping
export interface SearchData {
  _id: string
  slug: string
  brand: string
  image: string
  phone_name: string
  __v: number
}

//for the array of the fetched data
export type SearchDataArray = SearchData[]

//for the props that are passed from the container to the component
export interface searchDataProps {
  searchResults: SearchData[]
}