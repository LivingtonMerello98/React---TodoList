import React from 'react';
import ToDoItem from './ToDoItem';
import { useTaskContext } from '../store';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function List() {
    const { tasks, setTasks } = useTaskContext();

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedTasks = Array.from(tasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        setTasks(reorderedTasks);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="mt-4 scroll-container rounded-md w-full"
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={index} draggableId={`${index}`} index={index}>
                                {(provided) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="mb-2"
                                    >
                                        <ToDoItem
                                            task={task}
                                            onRemove={() => {
                                                const updatedTasks = tasks.filter(
                                                    (_, i) => i !== index
                                                );
                                                setTasks(updatedTasks);
                                            }}
                                        />
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default List;
