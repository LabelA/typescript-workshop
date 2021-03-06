/* 01
 * ======================================================
 * TODO: This is an example from our Redux setup
 *
 * 1. Add the possibility of a "parameter" to 'BaseState'
 * 1. Pass UserState and PostState as parameter to BaseState
 * 2. Overwrite data type inside BaseState with the passed state
 *
 * Tip: Look into TypeScript generics
 * ======================================================*/

export type BaseState<DataType> = {
  loading: boolean;
  error: string;
  data: DataType;
};

export type UserState = BaseState<{
  name: string;
  age: number;
}>;

export type PostState = BaseState<{
  title: string;
  content: string;
}>;

export function exercise0601() {
  // Don't change the function
  const myFunction = (user: UserState, post: PostState): string | void => {
    if (!user.loading) {
      return user.data.name;
    }

    if (!post.loading) {
      return post.data.title;
    }
  };





  /*
   * ======================================================
   * Do not touch this
   * ======================================================*/
  return { myFunction };
}



/* 02
 * ======================================================
 * TODO: Extend ComponentProps with RouterProps
 * ======================================================*/
export type RouterProps = {
  history: {
    push: (route: string) => void;
  };
  match: {
    id: string;
  };
};

export type ComponentProps = RouterProps & {
  title: string;
};

export function exercise0602() {
  // Don't change the function
  const navigateTo = (props: ComponentProps) => {
    props.history.push(props.match.id);
  };







  /*
  * ======================================================
  * Do not touch this
  * ======================================================*/
  return { navigateTo };
};
