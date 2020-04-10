import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';


const TapTwo = (props) => {
    return (
        <CardGroup style={{ margin: 5, padding: 5, height: 400, height: 400}}>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="https://www.santisookdogandcat.org/img/logo-top.png" style={{ width: 400, height: 150}}  />
                <CardBody>
                    <CardTitle>
                       <h4>มูลนิธิสันติสุขเพื่อสุนัขและแมวจรจัด</h4>
                        </CardTitle>
                    <CardText>มูลนิธิสันติสุขเพื่อสุนัขและแมวจรจัดมีกิจกรรมมากมายในการช่วยเหลือสุนัขและแมวจรจัดและนอกจากนั้นยังมีการทำบุญและบริจาคของเพื่อสมทบทุนให้กับมูลนิธิต่อไปด้วยค่ะ</CardText>
                    <Button href="https://www.santisookdogandcat.org/">อ่านพิ่มเติม</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="https://home4animals.org/wp-content/uploads/2018/02/5.jpg" style={{ width: 450, height: 150}}  />
                <CardBody>
                <CardTitle>
                       <h4>มูลนิธิบ้านสงเคราะห์สัตว์พิการ</h4>
                        </CardTitle>
                    <CardText>มูลนิธิบ้านสงเคราะห์สัตว์พิการ มีจุดเริ่มต้นจากครอบครัวคุณพิมพ์กุล โอฬารศิรโรจน์ (เรณู จุลสุคนธ์) ที่ได้ช่วยเหลือสัตว์ต่างๆ ที่พิการจนหายจากการเจ็บป่วย </CardText>
                    <Button href="https://home4animals.org/history/">อ่านพิ่มเติม</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="/assets/318x180.svg" style={{ width: 400, height: 150}}  />
                <CardBody>
                <CardTitle>
                       <h4>มูลนิธิสันติสุขเพื่อสุนัขและแมวจรจัด</h4>
                        </CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>อ่านพิ่มเติม</Button>
                </CardBody>
            </Card>
            
        </CardGroup>
    );
};

export default TapTwo;