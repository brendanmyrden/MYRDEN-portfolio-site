// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Brendan Myrden</h1>
                <p>Junior Blockchain Developer, JavaScript Programmer, and Sound Designer </p>
                <a href="mailto:brendanmyrden@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;