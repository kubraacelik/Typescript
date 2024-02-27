export type instructorProps = {
    instructorNameLastName : { 
        firstName : string,
        lastName:string
    }
}

export type DataComing = {
    name:string;
    courseNumber:number;
    isBest:boolean
}

export type InstructorListProps = {
    instructorNameLastNameList : {
        firstName:string;
        lastName:string;
    }[]
}

export type RequestProps = {
    status: 'loading' | 'success' | 'error';
}