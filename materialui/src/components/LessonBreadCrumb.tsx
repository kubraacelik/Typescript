import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

export const LessonBreadCrumb = () => {
    return (
        // separator : Araya hangi sembolün geleceğini gösterir. Normali '/' budur.
        // maxItems : kaç elemanın gösterileceğini gösterir. 
        <Breadcrumbs separator='-' maxItems={2}>
        <Link href='/' underline='hover'>Anasayfa</Link>
        <Link href='/' underline='none'>Icons</Link>
        <Link href='/' underline='always'>Can Boz</Link>
        <Link href='/' underline='always'>Can Boz</Link>
        <Link href='/' underline='always'>Can Boz</Link>
        <Link href='/' underline='always'>Can Boz</Link>
        <Link href='/' underline='always'>Can Boz</Link>
        </Breadcrumbs>
    )
}
