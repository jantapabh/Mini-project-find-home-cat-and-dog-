import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';


const News = (props) => {
    return (

        <div>
            <CardGroup style={{ margin: 5, padding: 5, width: 1500, height: 400}}>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="http://phufay.go.th/public/list_upload/backend/list_615/pics_topic_615.jpg?672" style={{ width: 450, height: 150}} />
                <CardBody> 
                    <CardTitle>
                        <h4>โรคพิษสุนัขบ้าน่ากลัวกว่าที่คิด</h4>
                        </CardTitle>
                    <CardText>โรคพิษสุนัขบ้าเป็นโรคที่พบได้ตลอดปีเป็นแล้วเสียชีวิตทุกราย ในประเทศไทยพบว่าสุนัขและแมวป่วยเป็นโรคนี้มากที่สุด ขณะนี้กระทรวงสาธารณสุข ได้เร่งสร้างพื้นที่ในชนบทและเขตเมืองทั่วประเทศให้ปลอดโรคพิษสุนัขบ้า เพื่อกำจัดโรคพิษสุนัขบ้าให้หมดไปจากประเทศไทยภายใน พ.ศ.2563 </CardText>
                    <Button href="http://phufay.go.th/public/list/data/detail/id/615/menu/276/page/1">อ่านเพิ่มเติม</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/happy-hipster-couple-bulldog-relaxing-260nw-713750788.jpg" style={{ width: 450, height: 160}} />
                <CardBody>
                    <CardTitle>
                        <h4>ระบบสารสนเทศเพื่อการเฝ้าระวังโรคพิษสุนัขบ้า</h4>
                        </CardTitle>
                    <CardText>ระบบสารสนเทศเพื่อการเฝ้าระวังโรคพิษสุนัขบ้าจัดทำมาเพื่อแสดงข้อมูลเกี่ยวกับสุนัขและแมวและอัตราการเกิดโรคพิษสุนัขบ้าในสุนัขและแมวในแต่ละพื้นที่</CardText>
                    <Button href="http://www.thairabies.net/trn/">อ่านเพิ่มเติม</Button>
                </CardBody>
            </Card>
            <Card  style={{ margin: 10, padding: 10}}>
                <CardImg top width="100%" src="https://image.bangkokbiznews.com/kt/media/image/news/2019/01/23/825021/750x422_825021_1548238139.jpg" style={{ width: 450, height: 150}} />
                <CardBody>
                    <CardTitle><h4>"ปศุสัตว์"เผยไทยจะมีสุนัข-แมวจรจัด 1.92 ล้านตัวในปี 70 </h4></CardTitle>
                    <CardText>ผลการสำรวจในปี 2550 ประเทศไทยมีสุนัขจรจัด ประมาณ 350,000 ตัว ดังนั้นหากมีการเพิ่มประชากรสุนัขและแมวจรจัดคาดว่า ในปี พ.ศ. 2570 ประเทศไทยจะมีสุนัขและแมวจรจัด ประมาณ 1.92 ล้านตัว</CardText>
                    <Button href="https://www.bangkokbiznews.com/news/detail/825021">อ่านเพิ่มเติม</Button>
                </CardBody>
            </Card>
        </CardGroup>
    
            </div>
   
    );
};

export default News;