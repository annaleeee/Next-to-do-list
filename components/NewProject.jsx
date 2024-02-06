"use client"; 
import { useRef } from 'react';

import { Label } from './ui/label';
import { Input } from './ui/Input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export default function NewProject({ onAdd, onCancel }){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function onSave(){
       
    }
    
    return (
        <> 
        {/* grid 주기 place-items-center */}
            <div style={{ marginTop: '80px', marginLeft: '10%' }}>
                <Label htmlFor='title'>Project Title</Label>
                <Input />

                <Label htmlFor='description'>Description</Label>
                <Textarea />

                <Label htmlFor='dueDate'>Due Date</Label>
                <Input type="date" />
            </div>
            <main style={{ marginTop: '40px', marginLeft: '35%' }}>
                <div>
                    <Button 
                        className='px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-700'
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                    <Button onClick={onSave}>Save</Button>
                </div>
            </main>
        </>
    )
};