import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller("todos")
export class TodosController {
    constructor(private readonly todosService: TodoService){}
    
    @Post()
    create(@Body() dto:CreateTodoDto){
        return this.todosService.create(dto)
    }

    @Get()
    findMany(){
        return this.todosService.findMany()
    }

    @Put(":id")
    update(@Param("id")id :number, @Body() dto:CreateTodoDto){
        return this.todosService.update(id,dto)
    }

    @Delete(":id")
    delete(@Param("id")id :number){
        return this.todosService.delete(id)
    }
}