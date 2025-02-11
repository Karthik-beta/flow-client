import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ByEmployeeType() {
  return (
    <div className='space-y-8'>
        <div className='flex items-center gap-4'>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-lg font-large leading-none'>Employee Type</p>
          </div>
          <div className='font-large'>Present</div>
          <div className='font-large'>Absent</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>E</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-lg font-large leading-none'>Employee</p>
          </div>
          <div className='font-medium'>1999</div>
          <div className='font-medium'>234</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-lg font-large leading-none'>Contractor</p>
          </div>
          <div className='font-medium'>39</div>
          <div className='font-medium'>23</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-lg font-large leading-none'>Traineeess</p>
          </div>
          <div className='font-medium'>299</div>
          <div className='font-medium'>123</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-lg font-large leading-none'>Probation</p>
          </div>
          <div className='font-medium'>99</div>
          <div className='font-medium'>45</div>
        </div>
      </div>
    </div>
  )
}
