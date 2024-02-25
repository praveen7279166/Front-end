export type RecordType = {
    sReason: string,
    nDate: Date,
    bIsFullDay: boolean,
    bIsLeaveTypeCL: boolean
}

export type ResultDataObject = {
    limit: number,
    products: ResultData[],
    skip: number,
    total: number
}
  
export type ResultData = {
    brand: string,
    category: string,
    description: string
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string
}

export type oRecordInfo = {
    sId: string,
    nDate: Date,
    sReason: string,
    bFullDay: boolean,
    bIsLeaveTypeCL: boolean
}

export enum eLeaveDuration {
    FULL_DAY = 1,
    HALF_DAY = 2
}

export enum eLeaveType {
    CL = 1,
    PL = 2
}