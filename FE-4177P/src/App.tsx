import React, { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DroppableProvided } from "react-beautiful-dnd";
import { nanoid } from 'nanoid';

type QuoteType = {
  id: string;
  content: string;
};

const reorder = (list: QuoteType[], startIndex: number, endIndex: number): QuoteType[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`;

const Quote: React.FC<{ quote: QuoteType; index: number; onDelete: (index: number) => void }> = ({ quote, index, onDelete }) => {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided: DraggableProvided) => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {quote.content}
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        </QuoteItem>
      )}
    </Draggable>
  );
};

const QuoteList: React.FC<{ quotes: QuoteType[]; onDelete: (index: number) => void }> = React.memo(({ quotes, onDelete }) => {
  return (
    <>
      {quotes.map((quote, index) => (
        <Quote quote={quote} index={index} key={quote.id} onDelete={onDelete} />
      ))}
    </>
  );
});

const QuoteApp: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedQuotes = reorder(
      quotes,
      result.source.index,
      result.destination.index
    );

    setQuotes(reorderedQuotes);
  };

  const handleDelete = (index: number) => {
    const newQuotes = [...quotes];
    newQuotes.splice(index, 1);
    setQuotes(newQuotes);
  };

  const handleAdd = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newQuote: QuoteType = {
      id: nanoid(),
      content: inputValue
    };

    setQuotes([...quotes, newQuote]);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yapılacakları girin"
        />
        <button onClick={handleAdd}>Ekle</button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <QuoteList quotes={quotes} onDelete={handleDelete} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default QuoteApp;
