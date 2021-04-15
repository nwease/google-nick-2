import Image from 'next/image'

function Header() {
    return (
        <header>
            <Image
                src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                alt='Google'
                width={50}
                height={20}
            />
        </header>
    );
}

export default Header;
