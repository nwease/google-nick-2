import Head from 'next/head'
import Avatar from '../components/Avatar';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline';
import Footer from '../components/Footer';
import {useRef} from 'react';
import {useRouter} from 'next/router'

export default function Home() {

    const router = useRouter();

    const searchInput = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInput.current.value;
        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Head>
                <title>
                    Google Nick 2
                </title>

                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
                <div className='flex space-x-4 items-center'>
                    <p className='link'>
                        About
                    </p>

                    <p className='link'>
                        Store
                    </p>
                </div>

                <div className='flex space-x-4 items-center'>
                    <p className='link'>
                        Gmail
                    </p>

                    <p className='link'>
                        Images
                    </p>

                    <ViewGridIcon className='h-9 w-9 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>

                    <Avatar
                        url='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-512.png'
                    />
                </div>
            </header>

            <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                    width={295}
                    height={90}
                />

                <div className='input'>
                    <SearchIcon className='h-5 mr-3 text-gray-500'/>

                    <input
                        ref={searchInput}
                        className='flex-grow focus:outline-none'
                        type='text'
                    />

                    <MicrophoneIcon className='h-5 mr-3 text-blue-500'/>
                </div>

                <div
                    className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
                    <button onClick={search} className='btn'>
                        Search Google
                    </button>

                    <button onClick={search} className='btn'>
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>

            <Footer className=''/>
        </div>
    )
}
