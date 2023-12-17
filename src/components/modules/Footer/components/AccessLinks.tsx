import { FC } from 'react';

interface LinkText {
    href: string;
    text: string;
}

const AccessLinks: FC<LinkText> = ({ href, text }) => {
    return (
        <>
            <a className='font-vazir-light text-sm font-medium' href={href}>
                {text}
            </a>
        </>
    );
};

export default AccessLinks;
