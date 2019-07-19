import React from 'react';

const TodoList = () => {
    return (
        <>
            <ul>
                <li><label><input type="checkbox" /> <span>화초에 물 주기</span></label><button>수정</button><button>삭제</button></li>
                <li><label><input type="checkbox" /> <span>프듀 투표하기</span></label><button>수정</button><button>삭제</button></li>
                <li><label><input type="checkbox" /> <span>주말에 공부하기</span></label><button>수정</button><button>삭제</button></li>
            </ul>
        </>
    )
}

export default TodoList;