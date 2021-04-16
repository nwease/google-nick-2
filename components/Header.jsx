import Image from 'next/image'
import { useRouter } from 'next/router'
import {useRef} from 'react';
import {SearchIcon, XIcon} from '@heroicons/react/outline';
import {MicrophoneIcon} from '@heroicons/react/solid';

function Header() {

    const router = useRouter();
    const searchInput = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInput.current.value;
        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className='sticky top-0 bg-white'>
            <div>
                <Image
                    className='cursor-pointer'
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                    alt='Google'
                    width={102}
                    height={32}
                    onClick={() => router.push('/')}
                />

                <form className='input'>
                    <input
                        ref={searchInput}
                        className='flex-grow w-full focus:outline-none'
                        type='text'
                    />

                    <XIcon
                        className='headerIcon'
                        onClick={() => searchInput.current.value = ''}
                    />

                    <MicrophoneIcon className='headerIcon text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300' />

                    <SearchIcon className='headerIcon text-blue-500 hidden sm:inline-flex' />

                    <button type='submit' hidden onClick={search}>
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
