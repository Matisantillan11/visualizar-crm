import { HomeComponent } from '@/components/Home/Home.component'
import { useState } from 'react'

export const HomeController = () => {
	const [status, setStatus] = useState('close')

	return <HomeComponent status={status} setStatus={setStatus} />
}
