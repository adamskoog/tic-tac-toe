import { Metadata } from 'next'

import Game from '@/components/Game';

import pjson from '@/package.json'

export const metadata: Metadata = {
    title: pjson.appTitle,
    authors: [ { name: 'Adam Skoog', url: pjson.repository }],
    creator: 'Adam Skoog',
}

export default async function Page() {
    return <Game version={pjson.version} repoUrl={pjson.repository} />
}