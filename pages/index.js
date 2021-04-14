import Head from 'next/head'
import Avatar from '../components/Avatar';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline';

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>
                    Google Nick 2
                </title>

                <link rel='icon' href='/favicon.ico' />
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

                    <ViewGridIcon className='h-9 w-9 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

                    <Avatar
                        url='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/trump_president_avatar_male-512.png'
                    />
                </div>
            </header>

            <form className=''>
                <Image
                    src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                    alt='Google'
                    width={300}
                    height={100}
                />

                <div className='input'>
                    <SearchIcon className='h-5 mr-3 text-gray-500' />

                    <input className='flex-grow focus:outline-none' type='search' />

                    <MicrophoneIcon className='h-5 mr-3 text-blue-500' />
                </div>
            </form>

            {/*FOOTER*/}
        </div>
    )
}
