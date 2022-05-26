import React from "react";
import { Flex } from "../Box";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import StyledSubMenuItems from "./styles";
import { SubMenuItemsProps } from "./types";

const SubMenuItems: React.FC<SubMenuItemsProps> = ({
  items = [],
  activeItem,
  isMobileOnly = false,
  ...props
}) => {
  return (
    <StyledSubMenuItems
      justifyContent={[isMobileOnly ? "flex-end" : "start", null, "center"]}
      {...props}
      pl={["12px", null, "0px"]}
      $isMobileOnly={isMobileOnly}
    >
      {items.map(
        ({ label, href, iconName }) =>
          label && (
            <Flex key={label} mr="20px" flex="0 0 auto">
              <MenuItem
                href={href}
                isActive={href === activeItem}
                variant="subMenu"
              >
                {iconName && (
                  <IconComponent
                    color={href === activeItem ? "secondary" : "textSubtle"}
                    iconName={iconName}
                    mr="4px"
                  />
                )}
                {label}
              </MenuItem>
            </Flex>
          )
      )}
    </StyledSubMenuItems>
  );
};

export default SubMenuItems;
