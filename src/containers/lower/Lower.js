import React from 'react'
import RecentTicket from '../../components/lower_components/recent_ticket/RecentTicket'
import TopCategorie from '../../components/lower_components/top_categories/TopCategorie'

export default function Lower() {
  return (
    <div className='mt-4'>
        <RecentTicket/>
        <TopCategorie/>
    </div>
  )
}
