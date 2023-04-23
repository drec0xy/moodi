import * as React from 'react';
import {useRouter, usePathname} from 'next/navigation';
import { topnavbar } from 'moodi_bot/types/types';


const TopNavBar: React.FC<topnavbar> = ({ id }) =>  {


    return (
        <div>
            <h1>top nav</h1>

        </div>
    )
} 

export default TopNavBar