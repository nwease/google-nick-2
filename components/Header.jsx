import Image from 'next/image'
import { useRouter } from 'next/router'
import {useRef} from 'react';
import {SearchIcon, XIcon} from '@heroicons/react/outline';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

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
        <header className='sticky top-0 bg-white p-6 items-center'>
            <div className='flex w-full'>
                <Image
                    className='cursor-pointer'
                    src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                    alt='Google'
                    width={120}
                    height={40}
                    onClick={() => router.push('/')}
                />

                <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                    <input
                        ref={searchInput}
                        className='flex-grow w-full focus:outline-none'
                        type='text'
                    />

                    <XIcon
                        className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                        onClick={() => searchInput.current.value = ''}
                    />

                    <MicrophoneIcon className='headerIcon text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300' />

                    <SearchIcon className='headerIcon text-blue-500 hidden sm:inline-flex' />

                    <button type='submit' hidden onClick={search}>
                        Search
                    </button>
                </form>

                {/*<ViewGridIcon className='h-9 w-9 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>*/}

                <Avatar
                    className='ml-auto'
                    url='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-512.png'
                />
            </div>

            <HeaderOptions />
        </header>
    );
}

export default Header;
