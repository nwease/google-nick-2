function Footer() {
    return (
        <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
            <div px-8 py-3>
                <p className='mb-3 mt-3 ml-7'>
                    Netherlands
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 py-3'>
                <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
                    <p>
                        About
                    </p>

                    <p>
                        Advertising
                    </p>

                    <p>
                        Business
                    </p>

                    <p>
                        How Search Works
                    </p>
                </div>

                <div className='flex justify-center space-x-8 md:ml-auto'>
                    <p>
                        Privacy
                    </p>

                    <p>
                        Terms
                    </p>

                    <p>
                        Settings
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
















