"use client"; 
import { useRef } from 'react';

import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function NewProject({ onAdd, onCancel }){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function onSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    
    return (
        <div className='flex flex-col justify-center items-center h-screen'> 
            <div className="bg-white p-8 rounded shadow-md">
                <Label ref={title} htmlFor='title'>Project Title</Label>
                <Input />

                <Label ref={description} htmlFor='description'>Description</Label>
                <Textarea />

                <Label ref={dueDate} htmlFor='dueDate'>Due Date</Label>
                <Input type="date" />
            </div>
            <main className="flex">
                <Button 
                    className='px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-700'
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button onClick={onSave}>Save</Button>
            </main>
        </div>
    )
};