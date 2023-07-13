
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Drag = () => {
  const finalSpaceCharacters = [
    {
      id: "gary",
      name: "Gary Goodspeed",
    },
    {
      id: "cato",
      name: "Little Cato",
    },
    {
      id: "kvn",
      name: "KVN",
    },
    {
      id: "mooncake",
      name: "Mooncake",
    },
    {
      id: "quinn",
      name: "Quinn Ergon",
    },
  ];
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
      <div className='App-header'>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {characters.map(({ id, name }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                     
                      <p>{name}</p>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  );
};

export default Drag;
 

/* import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const MyDragDropComponent = () => {
  const [items, setItems] = useState([
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
  
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
  
    // Update the IDs of the draggable items
    const updatedItems = newItems.map((item, index) => ({
      ...item,
      id: `item-${index + 1}`,
    }));
    setItems(updatedItems);
}

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="my-droppable">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps} className="characters">
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
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
};

export default MyDragDropComponent;
 */