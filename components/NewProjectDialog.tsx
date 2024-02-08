"use client"; 
interface ButtonProps {
    onClick: () => void;
}
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';

const NewProjectDialog: React.FC<ButtonProps> = ({ onClick, children }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>New Project</DialogTitle>
                <DialogDescription>
                    새로운 프로젝트를 생성해보세요.
                </DialogDescription>
                </DialogHeader>
                <div className="grid py-4">
                    <div className="grid grid-cols-4 items-center">
                        <Label htmlFor="name">
                            Project Title
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center">
                        <Label htmlFor="description">
                            Descrition
                        </Label>
                        <Textarea id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center">
                        <Label htmlFor="username">
                            Due Date
                        </Label>
                        <Input type="date" id="dueDate" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                <Button type="submit">Cancel</Button>
                <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default NewProjectDialog;
