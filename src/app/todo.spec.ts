import {
  inject, TestBed
} from '@angular/core/testing';

import {Todo} from './todo'

describe('Todo', () => {
    
    TestBed.configureTestingModule({
        providers : [Todo]
    })
    
    it('should create an instance', () => {
        expect(new Todo()).toBeTruthy()
    })
    it('should accept value in the constructor', () =>{
        let todo = new Todo({
            title : 'hello',
            complete : true
        })
        expect(todo.title).toEqual('hello')
        expect(todo.complete).toEqual(true)
    })
})