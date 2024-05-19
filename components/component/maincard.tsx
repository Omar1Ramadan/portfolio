import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cn } from '@/lib/utils';
import Image from 'next/image';


type CardProps = React.ComponentProps<typeof Card>

const MainCard = ({className, ...props} : CardProps) =>{

    return(
        <div>
            <Card className= {cn("w-[1000px] h-[550px]",className)} {...props} >
                <CardHeader>
                    <CardTitle> Hello There</CardTitle>
                        <CardDescription>You Are Gya</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
                <CardFooter>
                    <p>
                        Card Footer
                    </p>
                </CardFooter>
            </Card>
        </div>
    )

}

export default MainCard;