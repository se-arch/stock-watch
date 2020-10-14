const search = async (req: Request, res: Response): Promise<void> => {
  try {
    // const body = req.body as Pick<ITodo, "name" | "description" | "status">

    res.status(201).json(
        {
            message: "Todo added",
            todo: newTodo,
            todos: allTodos
        }
    )
  } catch (error) {
    throw error
  }
}
