import Option from './Option';
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from '@heroicons/react/outline';

function HeaderOptions() {
    return (
        <div className='headerOptions'>
            <div className='text-sm flex space-x-6'>
                <Option Icon={SearchIcon} title='All' selected />
                <Option Icon={PhotographIcon} title='Images' />
                <Option Icon={PlayIcon} title='Videos' />
                <Option Icon={NewspaperIcon} title='News' />
                <Option Icon={MapIcon} title='Maps' />
                <Option Icon={DotsVerticalIcon} title='More' />
            </div>

            <div className='text-sm flex space-x-4'>
                <p className='link'>
                    Settings
                </p>

                <p className='link'>
                    Tools
                </p>
            </div>
        </div>
    );
}

export default HeaderOptions;
