import React from 'react'
import { Input, Button } from 'antd';
const { Search } = Input;

const onSearch = value => console.log(value);

export default function ModalSreach(props) {
    return (
        <div show="false" className="modal fade pt-5" id="modalSearch">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    {/* Modal body */}
                    <div className="modal-body">
                        <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        <div>
                        </div>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer">
                        <Button type="primary" data-dismiss="modal">
                            Save
                        </Button>
                        <Button danger type="primary" data-dismiss="modal" className='ml-3'>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
