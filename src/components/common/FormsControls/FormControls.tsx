import React from 'react';
import s from './FormControls.module.css'


const FormControl = (props: any) => {
		const hasError = props.meta.touched && props.meta.error
		return (
				<div className={`${s.formControl} ${hasError && s.error}`}>
						{props.children}
						<div>
								{hasError && <span>{props.meta.error}</span>}
						</div>
				</div>
		)
}

export const TextArea = (props: any) => {
		return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}
export const Input = (props: any) => {
		return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}