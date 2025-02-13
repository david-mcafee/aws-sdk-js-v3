// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreatePortfolioShareInput, CreatePortfolioShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePortfolioShareCommand,
  serializeAws_json1_1CreatePortfolioShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface CreatePortfolioShareCommandInput extends CreatePortfolioShareInput {}
export interface CreatePortfolioShareCommandOutput extends CreatePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Shares the specified portfolio with the specified account or organization node.
 *          Shares to an organization node can only be created by the management account of an
 *          organization or by a delegated administrator. You can share portfolios to an organization,
 *          an organizational unit, or a specific account.</p>
 *          <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p>
 *         <p>
 *             <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p>
 *          <p>You can't share a shared resource, including portfolios that contain a shared product.</p>
 *          <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class CreatePortfolioShareCommand extends $Command<
  CreatePortfolioShareCommandInput,
  CreatePortfolioShareCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePortfolioShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePortfolioShareCommandInput, CreatePortfolioShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreatePortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePortfolioShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePortfolioShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePortfolioShareCommandOutput> {
    return deserializeAws_json1_1CreatePortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
