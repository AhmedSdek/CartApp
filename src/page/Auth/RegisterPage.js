
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RegisterPage() {
    return (
        <div style={{height:'calc(100vb - 152px )'}}>
            <Container>
                <Row  className="py-5 d-flex justify-content-center hieght-search">
                <Col sm="12" className="d-flex flex-column ">
                <label className="mx-auto title-login">تسجيل حساب جديد</label>
                <input
            value=''
            placeholder="اسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
            />
            <input
            value=''
            placeholder="الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
            />
            <input
            value=''
            placeholder="الهاتف..."
            type="phone"
            className="user-input  text-center mx-auto"
            />
            <input
            value=''
            placeholder="كلمه السر..."
            type="password"
            className="user-input text-center mt-3 mx-auto"
            />
            <input
            value=''
            placeholder="تاكيد كلمه السر..."
            type="password"
            className="user-input text-center mt-3 mx-auto"
            />
            <button className="btn-login mx-auto mt-4">تسجيل الحساب</button>
            <label className="mx-auto my-4">
            لديك حساب بالفعل؟
            <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
                </span>
            </Link>
            </label>
        </Col>
        </Row>
    </Container>
        </div>
    )
}

export default RegisterPage