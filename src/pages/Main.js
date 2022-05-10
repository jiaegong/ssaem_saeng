import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actionCreators as reviewActions } from '../redux/modules/review';
import { actionCreators as bookingAction } from '../redux/modules/booking';
import { BannerImg } from '../image/index';
import Review from '../components/Review';
import { AiFillStar } from 'react-icons/ai';

import { history } from '../redux/configureStore';

const Main = () => {
  const dispatch = useDispatch();
  const tutorList = useSelector((state) => state.tutor.list);

  console.log(tutorList);
  const reviewList = useSelector((state) => state.review.list);
  console.log('유저정보 확인', reviewList);

  React.useEffect(() => {
    dispatch(reviewActions.getReviewDB());
  }, []);

  return (
    <Wrap>
      <div className="bannerWrap">
        <div className="banner">
          <p className="bannerTitle">
            <span>프랭글스에서</span> <span>프랭글과 대화하고</span>
            <span> 영어실력 쌓기!</span>
          </p>
          <p className="bannerText">
            <span>온라인 언어교환으로 놀면서 스펙쌓자!</span>
            <span> 님도보고 뽕도따는 두마리 토끼 전략~</span>
            <span> 수다떨면서 영어실력 올리는 사람 나야나!</span>
          </p>
          <button className="bannerBtn">예약하러 가기 ▶︎</button>
        </div>
      </div>
      <div className="innerWrap">
        <div className="contentWrap">
          <div className="contentsTitleWrap">
            <div className="subTitleWrap">
              <span className="subTitle">
                지난주 가장 예약이 많았던 튜터에요
              </span>
              <span className="tutorMoreBtn">더보기 ></span>
            </div>
            <p className="title">인기 선생님 리스트</p>
          </div>
          <div className="cardList">
            {tutorList.map((item, idx) => {
              return (
                <div
                  className="card"
                  key={`tutor${idx}`}
                  onClick={() => {
                    history.push(`/detail/${item.userName}`);
                  }}
                >
                  <img
                    className="user_img"
                    // src={item.userProfile}
                    src={'https://via.placeholder.com/300x200'}
                    alt="#"
                  ></img>
                  <div className="user_info">
                    <p className="userName">{item.userName}</p>
                    <p className="userContents">{item.contents}</p>
                    {/* <p className="userTag">{item.tag}</p> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 리뷰 부분 */}
          <div className="reviewWrap">
            <div className="reviewInner">
              <div className="contentsTitleWrap">
                <div className="subTitleWrap">
                  <span className="subReviewTitle">
                    다른 튜티들의 리뷰를 들어보세요
                  </span>
                  <span className="reviewMoreBtn">더보기 ></span>
                </div>
                <p className="title">수강 추천 리뷰</p>
              </div>
              {/* 리뷰 맵 돌리는 곳 */}
              <ul className="reviewContentWrap">
                <li className="reviewItem">
                  {/* user_img */}
                  {/* <div className="reviewImgWrap">
                    <img className="userProfileImg" src="" alt=""></img>
                  </div> */}
                  {/* user_img2 */}
                  <div className="reviewImgWrap2">
                    <img className="reviewImg" src="" alt=""></img>
                    <img className="userProfileImg" src="" alt=""></img>
                  </div>

                  <div className="reviewTextWrap">
                    <p className="tutorReview">티쳐: 안젤라</p>
                    <div className="rating">
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                    </div>
                    <p className="tuteeReview">
                      너무 예뻐요 아름답고.. 말도 잘하고 머리부터 발끝까지
                      완벽해,, Perfect~~
                    </p>
                    <button className="tutorBookingBtn btnPosition btn">
                      나도 선생님 예약하기
                    </button>
                    {/* <div className="reviewBtnWrap btnPosition">
                      <button className="reviewEditBtn btn">수정하기</button>
                      <button className="reviewDeleteBtn btn">삭제하기</button>
                    </div> */}
                  </div>
                </li>
                <li className="reviewItem">
                  <div className="reviewImgWrap1">
                    <img className="userProfileImg" src="" alt=""></img>
                  </div>
                  <div className="reviewTextWrap">
                    <p className="tutorReview">티쳐: 안젤라</p>
                    <div className="rating">
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                    </div>
                    <textarea
                      // style="resize: horizontal;"
                      className="tuteeReview"
                    >
                      너무 예뻐요 아름답고.. 말도 잘하고 머리부터 발끝까지
                      완벽해,, Perfect~~
                    </textarea>
                    {/* <p className="tuteeReview"> 
                      너무 예뻐요 아름답고.. 말도 잘하고 머리부터 발끝까지
                      완벽해,, Perfect~~
                    </p> */}
                    {/* btn */}
                    {/* main page BTN */}
                    {/* <button className="tutorBookingBtn btnPosition btn">
                      나도 선생님 예약하기
                    </button> */}

                    {/* detail page BTN */}
                    <div className="reviewBtnWrap btnPosition">
                      <button className="reviewEditBtn btn">수정하기</button>
                      <button className="reviewDeleteBtn btn">삭제하기</button>
                    </div>
                    {/* btn */}
                  </div>
                </li>
              </ul>
              {/* 리뷰 맵 돌리는 곳 */}
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  /* 공통 */
  width: 100%;
  min-height: 905px;

  /* 배너 */
  .bannerWrap {
    width: 100%;
    height: 700px;
    padding-top: 120px;
    background-image: url('${BannerImg}');
    background-size: cover;
    background-position: center;
    margin-bottom: 30px;

    .banner {
      max-width: 1432px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0 16px;

      .bannerTitle {
        display: flex;
        flex-direction: column;
      }
      .bannerTitle > span {
        font-size: 64px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #fff;
      }
      .bannerText {
        display: flex;
        flex-direction: column;
        margin: 10px 0 36px;
      }
      .bannerText > span {
        font-size: 16px;
        font-weight: 800;
        margin-top: 5px;
        letter-spacing: 1px;
        color: #fff;
      }

      .bannerBtn {
        /* width: 332px; */
        /* height: 80px; */
        width: 290px;
        height: 70px;
        font-size: 18px;
        font-weight: 800;
        cursor: pointer;
        background: #fff;

        border: 2px solid #000;
        border-radius: 40px;
        box-shadow: 2px 6px 16px 0px #0000004b;
      }
    }
  }

  /* 컨텐츠 */
  .innerWrap {
    width: 100%;
    max-width: 1432px;
    min-height: 910px;
    padding: 0 16px;

    margin: auto;

    background: white;

    /* 인기 선생님 리스트 Wrap */
    .contentWrap {
      width: 100%;
      margin-top: 20px;

      .contentsTitleWrap {
        margin-bottom: 40px;

        .subTitleWrap {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .subTitle {
            /* font-size: 26px;
            font-weight: 400; */
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 6px;
          }
          .tutorMoreBtn {
            /* position: absolute; */
            cursor: pointer;
          }
        }
        .title {
          /* font-size: 60px; */
          font-size: 48px;
          font-weight: bold;
        }
      }

      .cardList {
        width: 100%;
        padding: 20px 0;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
        /* grid-gap: 2rem; */
        row-gap: 4rem;
        column-gap: 3rem;

        /* background: #575757; */

        .card {
          /* width: 310px; */
          /* height: 218px; */
          width: 300px;
          height: 200px;
          overflow: hidden;
          position: relative;

          /* border-radius: 10px; */
          background: #c4c4c4;

          .user_img {
            width: 100%;
            /* height: 100%; */

            background: #aaa;
          }

          .user_info {
            height: 60px;
            padding: 7px 20px;

            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: #eee;

            .userName {
              font-size: 20px;
              font-weight: bold;
              letter-spacing: 1px;
              margin-bottom: 2px;
            }

            .userContents {
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 1px;
            }
          }
        }
      }

      .reviewWrap {
        width: 100%;
        min-height: 600px;
        /* margin-top: 131px; */
        margin-top: 60px;
        /* background: #ddd; */

        .reviewInner {
          width: 100%;
          margin: auto;
          background-color: #fff;
          .contentsTitleWrap {
            .reviewMoreBtn {
              cursor: pointer;
            }
          }

          .reviewContentWrap {
            width: 100%;
            min-height: 188px;
            margin: auto;

            /* background-color: #a6a6a6; */

            .reviewItem {
              display: flex;
              padding: 24px;

              border-radius: 20px;
              box-shadow: 0px 2px 12px 0px #00000040;

              margin-bottom: 16px;
              /* background-color: #eee; */

              /* USER_IMG */
              .reviewImgWrap1 {
                width: 140px;
                height: 140px;
                border-radius: 50%;
                margin-right: 32px;
                overflow: hidden;

                background-color: #aaa;
              }
              /* USER_IMG */

              /* USER_IMG2 */
              .reviewImgWrap2 {
                width: 129px;
                height: 140px;
                border-radius: 50%;
                margin-right: 32px;
                position: relative;

                .reviewImg {
                  max-width: 101px;
                  width: 100%;
                  height: 101px;
                  border-radius: 50%;
                  position: absolute;
                  overflow: hidden;

                  background: #aaa;
                }
                .userProfileImg {
                  max-width: 71px;
                  width: 100%;
                  height: 71px;
                  position: absolute;
                  bottom: 0;
                  right: 0;

                  border-radius: 50%;
                  overflow: hidden;
                  background: #eee;
                }

                /* background-color: #aaa; */
              }

              /* USER_IMG2 */

              .reviewTextWrap {
                max-width: 1172px;
                width: 100%;
                position: relative;

                /* background-color: #aaa; */

                .tutorReview {
                  font-size: 28px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  margin-bottom: 5px;
                }

                .rating {
                  margin-bottom: 37px;
                  /* background-color: #eee; */

                  .star {
                    color: #aaa;
                    font-size: 24px;
                    margin-right: 5px;
                  }
                }

                .tuteeReview {
                  font-size: 20px;
                  resize: horizontal;
                  width: 100%;
                }

                .btnPosition {
                  position: absolute;
                  right: 0;
                  top: 0;
                }

                .btn {
                  border: none;
                  background: #fff;
                  color: #7c7c7c;
                  cursor: pointer;
                  text-decoration-line: underline;
                  margin-left: 5px;
                }
                .tutorBookingBtn {
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Main;
