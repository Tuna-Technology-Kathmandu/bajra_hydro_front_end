import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/bajra-logo.svg'
import { FooterMedia } from '../../localData/footer/FooterMedia';

const CompanyLinks = () => {
    return (
        <div className='flex flex-col items-center gap-4 max-[996px]:gap-2'>
            <Link to='/'>
                <Logo className='w-[110px] max-[996px]:w-[80px] max-[996px]:h-[60px] h-[93px]' />
            </Link>
            <div>
                <div className='flex gap-3'>
                    {
                        FooterMedia.map((item, index) => {
                            const { icon, path } = item;
                            return (
                                <Link to={path} key={index}>
                                    <div className="w-[40px] h-[40px] max-[996px]:w-[30px] max-[996px]:h-[30px] rounded-full flex justify-center items-center bg-commonblue
                                    hover:bg-commonblue/70 transition-all duration-300 ease-in-out
                                    ">
                                        {icon}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default CompanyLinks;