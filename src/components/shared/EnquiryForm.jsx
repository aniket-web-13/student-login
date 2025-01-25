
const EnquiryFrom = () =>{
    return (
        <>
            <div className="container border border-dark rounded-2">
                <div className="row"><h1 className="text-center">Treemiti Informatics</h1></div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}
export default EnquiryFrom;