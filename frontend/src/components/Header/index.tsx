import React, { useEffect } from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Button2, Input, Heading, Text } from "./..";
import { Link } from "react-router-dom";
import { useUserContext } from "contexts/UserContext";
import { useFilesContext } from "contexts/fileContext";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const {currentUser, token, logout} = useUserContext();
  const {handleSearchBar} = useFilesContext();

  useEffect(() => {
    handleSearchBar(searchBarValue);
  }, [searchBarValue]);

  return (
    <header {...props}>
      <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1388px]">
        <div className="flex items-center gap-[13px]">
          <Img src="images/img_image_6.png" alt="imagesix_one" className="w-[32px] object-cover" />
          <Heading size="md" as="h1" className="mr-[13px] md:mr-0 !text-gray-600_01">
            IncogFiles
          </Heading>
        </div>
        <div className="flex md:flex-col justify-center w-[78%] md:w-full gap-[34px]">
          <div className="flex md:flex-col justify-between w-[80%] md:w-full gap-5">
            <div className="md:self-stretch flex-1">
              <div>
                <div>
                  <Input
                    name="search"
                    placeholder={`Search Files`}
                    value={searchBarValue}
                    onChange={(e: string) => setSearchBarValue(e)}
                    suffix={
                      <div className="flex justify-center items-center w-[16px] h-[16px]">
                        {searchBarValue?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} />
                        ) : (
                          <Img src="images/img_search.svg" alt="search" className="cursor-pointer" />
                        )}
                      </div>
                    }
                    className="flex items-center justify-center h-[40px] gap-[35px] px-4 text-blue_gray-900 rounded-tl rounded-bl text-base border-indigo-50 border border-solid bg-gray-100_01"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Button className="flex items-center justify-center h-[40px] w-[40px] rounded-tr rounded-br border-blue_gray-100 border border-solid bg-white-A700">
                  <Img src="images/img_icon_caret_bottom.svg" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Button className="flex flex-col items-center p-3">
                  <Img src="images/img_search_gray_600_01.svg" alt="search_one" className="h-[16px] w-[16px]" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Button className="flex flex-col items-center p-3">
                  <Img src="images/img_cog.svg" alt="cog_one" className="h-[16px] w-[16px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center md:self-stretch gap-5 flex-1">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Button className="flex flex-col items-center p-3">
                  <Img src="images/img_icon_grid.svg" alt="icongrid_one" className="h-[16px] w-[16px]" />
                </Button>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div>
                  <div className="bg-white-A700 rounded-[8px]">
                    {token !== "" ? <Button2 size="xs" variant = "fill" shape="round" className="w-full mt-4 rounded-full py-3" onClick={() => logout()}>
                      <Text>
                        Logout
                      </Text>
                    </Button2> : <Link to = "/signin">
                      <Text size="s" as="p" className="self-end !text-blue_gray-900">
                        Login
                      </Text>
                    </Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
