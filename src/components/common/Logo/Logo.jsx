import logo from './logo.svg'


export default function Logo({ width }) {
    return (
        <a href="#">
            <img className='logo' src={logo} alt="logo" width={width}/>
        </a>      
    );
}