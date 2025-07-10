import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import classNames from 'classnames'
import { memo } from 'react'

function Modal({ children, isOpen, onClose, size="max-w-lg" }) {

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={onClose} >
            
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80 backdrop-blur-sm">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className={classNames(`rounded-xl p-6 ${size}`, {
                  "bg-white/15 backdrop-blur-sm" : isOpen
                })}>

                  { children }

                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default memo(Modal)