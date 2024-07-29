'use client'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Button } from './ui/button'

function PostButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='outline'
                    className='font-semibold text-sm flex items-center gap-1'
                >
                    <Plus className='h-4 w-4 text-center' />
                    <span className=''>Spot a Pot</span>
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a Pot</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4 py-4">
                    <div className="">
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="">
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PostButton