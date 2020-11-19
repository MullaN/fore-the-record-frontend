import React from 'react';
import {Card, CardContent, Image} from 'semantic-ui-react'
import '../App.css'

const CourseCard = ({course: {id, name, cover_img}}) => {
    return(
        <Card>
            <Image src={cover_img} alt={name} width='100%'/>
            <CardContent className="CourseTile" style={{background: 'rgba(22,110,20,1)', visible: 'false'}}>
                <span>{name}</span>
            </CardContent>
        </Card>
    )
}

export default CourseCard