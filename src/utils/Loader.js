import { Triangle } from "react-loader-spinner";
export const Loading = () => {
  return (
    <>
      <div className="loader-center">
        <Triangle
          height="150"
          width="150"
          color="rgb(68, 120, 240)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          visible={true}
          class="loadercenter1"
        />
      </div>
    </>
  );
};
export default Loading;
