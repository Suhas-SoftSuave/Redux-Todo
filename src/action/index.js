export function clear() {
    return {
      type: 'CLEAR',
      
    }
  }

  export function add(name) {
    return {
      type: 'ADD',
      textname: name
    }
  }

  export function del(index) {
    return {
      type: 'DELETE',
      indexnum: index
    }
  }

  export function edit(index , value) {
    return {
      type: 'EDIT',
      indexnum: index,
      indexvalue: value
    }
  }