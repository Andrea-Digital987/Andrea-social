import React, { useContext } from 'react'
import './style.css'
import {useForm , SubmitHandler} from 'react-hook-form'
import { TInsertContext, TNewPost, TSocialContext } from '../../Utils/commonTypes'
import { SocialContext } from '../../context/SocialContext'
import { insertNewPost } from '../../Utils/utilities'
import { InsertWindowContext } from '../../context/InsertWindowContext'


function FormSection() {
    const {postsFetched , setPostsFetched} = useContext( SocialContext) as TSocialContext
    const {setOpened} = useContext(InsertWindowContext) as TInsertContext
    const {register , handleSubmit , reset} = useForm<TNewPost>({})

    const Submitted : SubmitHandler<TNewPost> = (data)=>{
        let newPost: TNewPost={
            id: 7,
            title: data.title,
            body: data.body,
        }
        insertNewPost(newPost , setPostsFetched , postsFetched)
        setOpened(false);
        reset();
    }
   
    return (
        <form className='form-section' onSubmit={handleSubmit(Submitted)}>
            <label htmlFor='title'>TITOLO POST:</label>
                <input {...register('title')} type='text' id='title'  placeholder='Inserisci il titolo...'/>
            <label htmlFor='body'>POST:</label>
                <textarea {...register('body')} id='body' placeholder='Inserisci il tuo post...'/>
            <input type='submit' className='submit-btn'/>
        </form>
  )
}

export default FormSection