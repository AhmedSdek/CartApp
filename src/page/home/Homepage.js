
import BrandFeatured from "../../component/Brand/BrandFeatured ";
import CardProductContainer from "../../component/Product/CardProductContainer";
import DiscountSection from "../../component/home/DiscountSection";
import HomeCategory from "../../component/home/HomeCategory";
import Slider from "../../component/home/Slider";
import img2 from '../../imeges/clothe.png';
import img1 from '../../imeges/labtop.png';

function HomePage() {
    return (
        <div>
            <Slider />
            <HomeCategory />
            <CardProductContainer title='الاكثر مبيعا' btntitle='المزيد' img = {img1}/>
            <DiscountSection />
            <CardProductContainer title='احدث الازياء' btntitle='المزيد' img = {img2}/>
            <BrandFeatured title='اشهر الماركات' btntitle='المزيد'/>
            
        </div>
        
    )
}
export default HomePage ;