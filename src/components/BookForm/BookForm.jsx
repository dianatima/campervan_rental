import {
    FormWrap, FormTitle, FormInfo, BlockWrap, FormBlock, FormInput, FormTextInput,
    DateInputWrap, CalendarIcon,SendBtn
} from "./BookForm.styled";
// import { ReactComponent as CalendarIcon } from "../../images/svg/calendar.svg";

export const BookForm = () => {
    // const dispatch = useDispatch();
  
      return (
        <>
              <FormWrap>
                <BlockWrap>
                    <FormTitle>Book your campervan now</FormTitle>
                    <FormInfo>Stay connected! We are always ready to help you.</FormInfo>
                  </BlockWrap>
                  <FormBlock>
                      <FormInput
                          type="text"
                          // required
                          // value={message}
                          // onChange={event => setMessage(event.currentTarget.value)}
                          // id="FBId"
                          name="name"
                          placeholder='Name'
                      ></FormInput>
                      <FormInput
                          type="text"
                          // required
                          // value={message}
                          // onChange={event => setMessage(event.currentTarget.value)}
                          // id="FBId"
                          name="email"
                          placeholder='Email'
                      ></FormInput>
                       <DateInputWrap>
                      <FormInput
                          type="text"
                          // required
                          // value={message}
                          // onChange={event => setMessage(event.currentTarget.value)}
                          // id="FBId"
                          name="date"
                          placeholder='Booking date'
                      ></FormInput>
                      <CalendarIcon />
                      </DateInputWrap>
                      <FormTextInput
                        type="text"
                        // required
                        // value={message}
                        // onChange={event => setMessage(event.currentTarget.value)}
                        // id="FBId"
                        name="comment"
                        placeholder='Comment'
                    />
                  </FormBlock>
                  <BlockWrap>
                      <SendBtn>Send</SendBtn>
                  </BlockWrap>
              </FormWrap>  
        </>
      
      );
    };
    